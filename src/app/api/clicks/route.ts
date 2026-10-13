import { connection } from "next/server";
import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

// 화면에 있는 링크 id 만 받도록 해서, 엉뚱한 값이 데이터베이스에 쌓이지 않게 합니다.
const linkIds = new Set(links.map((link) => link.id));

// GET /api/clicks : 모든 링크의 클릭 수를 한 번에 돌려줍니다. 예) { "github": 42, "blog": 7 }
export async function GET() {
  // 빌드할 때 미리 만들어 두지 않고, 요청이 올 때마다 최신 값을 읽도록 합니다.
  await connection();

  try {
    const clicks = await getClicksCollection();
    const docs = await clicks.find({ _id: { $in: [...linkIds] } }).toArray();

    // 아직 한 번도 눌리지 않은 링크는 0 으로 채워 줍니다.
    const counts: Record<string, number> = {};
    for (const id of linkIds) counts[id] = 0;
    for (const doc of docs) counts[doc._id] = doc.count;

    return Response.json(counts);
  } catch (error) {
    console.error("클릭 수를 불러오지 못했습니다:", error);
    return Response.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}

// POST /api/clicks : { "id": "github" } 를 보내면 그 링크의 클릭 수를 1 올립니다.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;

  if (typeof id !== "string" || !linkIds.has(id)) {
    return Response.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  try {
    const clicks = await getClicksCollection();
    // $inc 는 숫자를 더하는 명령이고, upsert 는 문서가 없으면 새로 만들라는 뜻입니다.
    const result = await clicks.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );

    return Response.json({ id, count: result?.count ?? 1 });
  } catch (error) {
    console.error("클릭 수를 저장하지 못했습니다:", error);
    return Response.json({ error: "클릭 수를 저장하지 못했습니다." }, { status: 500 });
  }
}
