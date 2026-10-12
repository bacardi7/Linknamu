# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# 링크나무 (Link in Bio 서비스)

## 프로젝트 개요
Linktree 처럼 내 모든 링크를 한 페이지에 모아 두고,
하나의 URL로 공유할 수 있는 서비스입니다.

## 기술 스택
 - Next.js 16 (App Router)
 - Tailwind CSS
 - MongoDB Atlas (클릭 수 저장)
 - Vercel (배포)

## 주요 기능
 - 프로필 표시 (이름, 소개, 사진)
 - 링크 카드 목록
 - 링크 클릭 수 집계

##  코드 규칙
 - TypeScript 사용
 - 컴포넌트는 src/components/ 아래에 작성
 - 환경 변수는 .env.local에 저장(절대 commit 하지 않음)
 - 모바일 우선 반응형 디자인

## 작업 환경
- 운영체제는 Windows 11입니다. 명령 예시는 PowerShell 또는 Git Bash 기준으로 적어 주세요.
- 아직 git 저장소가 아닙니다.
- Next.js 16.4 + React 19 + Tailwind CSS 4 프로젝트입니다 (create-next-app 으로 생성). 페이지는 src/app/, 컴포넌트는 src/components/ 에 둡니다.
- Next.js 16 은 예전 버전과 API가 다를 수 있으니, 코드를 쓰기 전에 AGENTS.md 와 node_modules/next/dist/docs/ 를 참고하세요.

## 명령어
- 개발 서버 실행: `npm run dev` (http://localhost:3000)
- 프로덕션 빌드: `npm run build`
- 빌드 결과 실행: `npm run start`
- 린트(코드 검사): `npm run lint`
- 테스트: 아직 테스트 도구가 설정되어 있지 않습니다.

## 사용자와 소통하는 방식
- 한국어 존댓말로 답해 주세요.
- 사용자는 Claude Code를 배우는 중입니다. 전문 용어는 쉽게 풀어서 설명하고, 무엇을 왜 바꾸었는지 짧게 알려 주세요.
