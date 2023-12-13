## 소개

<img width="1304" alt="캠핑장-01" src="https://github.com/gn753/camping101_refector/assets/71584114/77d951a4-2603-42a1-8e99-775351f2f091">
주의: 현재 12월 13일 기준 AWS 비용으로 인해 백엔드 API 배포가 종료 돼 현재는 작동하지않고 있습니다. 

팀 프로젝트로 백엔드 개발자 2명 프론트엔드 1명으로 구성된 개발한 캠핑예약서비스입니다.

테스트용 아이디:test1@naver.com
테스트용 비밀번호:1234

### 예약 캘린더 폼 
![1120234201567591](https://github.com/gn753/camping101_refector/assets/71584114/7ac8c9d9-15fd-4fce-b2bb-838ebd886d48)


### 마이 페이지

![1120234513131755](https://github.com/gn753/camping101_refector/assets/71584114/af3a867f-9626-4659-ab27-fb187c7333da)


### 리뷰 페이지 

![1120234345788470](https://github.com/gn753/camping101_refector/assets/71584114/13ef8b60-1361-4b34-94de-30accc138882)


## 핵심 사용 기술 및 개발환경

1. Next js
2. Typescript
3. Recoil
4. Emotion

### 스타일 가이드

![image](./documents/imgs/styleguide-01.png)

### 폴더구조

- components  
  ├── Camp 캠핑장 목록  
  ├── Home 메인페이지  
  ├── Join 회원가입  
  ├── Login 로그인  
  ├── Resv 캠핑장 예약  
  ├── Review 캠핑장 리뷰  
  ├── ReviewDetails 리뷰 상세페이지  
  ├── User 마이페이지  
  └── common 공통  
   ├── Auth

- libs : 전역적으로 재사용가능한 상태, api 모음
- pages : 서버사이드전용 api 및 페이지 컴포넌트
- public : 이미지 및 테스트용 데이터
