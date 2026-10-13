import { MongoClient } from "mongodb";

// MongoDB 연결 주소는 .env.local 의 MONGODB_URI 에서 읽습니다. (비밀번호가 들어 있으니 코드에 직접 쓰지 않습니다.)
const uri = process.env.MONGODB_URI;

// 개발 서버는 파일을 고칠 때마다 코드를 다시 불러오는데, 그때마다 새로 연결하면 연결이 계속 쌓입니다.
// 그래서 한 번 만든 연결을 globalThis(서버 전체에서 공유되는 보관함)에 저장해 두고 재사용합니다.
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

export function getMongoClient(): Promise<MongoClient> {
  if (!uri) {
    throw new Error(".env.local 에 MONGODB_URI 가 설정되어 있지 않습니다.");
  }
  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect();
  }
  return globalForMongo._mongoClientPromise;
}

// 클릭 수를 담는 컬렉션(표와 비슷한 데이터 묶음)입니다.
// 문서 하나가 링크 하나이고, { _id: 링크 id, count: 클릭 수 } 모양으로 저장됩니다.
export type ClickDoc = {
  _id: string;
  count: number;
};

export async function getClicksCollection() {
  const client = await getMongoClient();
  // db() 에 이름을 주지 않으면 MONGODB_URI 주소 끝에 적힌 데이터베이스를 사용합니다.
  return client.db().collection<ClickDoc>("clicks");
}
