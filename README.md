# 💳 Business Card Maker

사용자가 정해진 양식을 통해 이미지와 정보들을 입력하면 정해진 명함 디자인으로 디자인을 변경해줍니다.
해당 프로젝트를 진행하면서 얻어가려는 것들은 아래와 같습니다.

## Netlify 배포

https://jvn4dev-cardmaker.netlify.app/

<br />

## 📝 프로젝트를 통해 이 친구들을 배웁니다

- `React Hooks`
- `PostCSS`
- `React Router` : React Routing 을 도와주는 라이브러리
- `Firebase` : Authentication, realtime Database
- `Cloudinary` : 사용자의 이미지를 서버에 업로드 가능

---

<br />

### 🕸 **Routing?** in web

- #### a mechanism where HTTP requests gets link to specific web pages/resources.
- #### Router determines which pages should be open when a user visits a certain path.

<br />

### 🔥 **Firebase**

- #### Authentication with secure (OAuth)
- #### Firestore, Storage, Realtime DB
- #### Crashlytics : App이 죽었을 때 error log 등을 편하게 볼 수 있도록 도와줍니다.

<br />

### ☁️ **Cloudinary**

- #### Firebase 의 Storage를 써도 되지만 이는 사용자의 원파일을 그대로 저장하는 반면, Cloudinary는 사용자가 업로드한 이미지를 우리가 원하는대로 사이즈를 재조정하거나 이미지와 미디어에 관련된 더 다양한 기능들을 활용할 수 있습니다.

<br />

## 🍎 Things I learned

- `cp -R template card-maker` : tmp 파일을 활용하여 초기 react project 생성
- `@value key: value` : PostCSS를 활용해 common폴더 내 `color`, `size` 파일로 전역변수를 설정하여 프로젝트에서 쓰이는 CSS 값들을 변수처럼 활용
- dependency injection 을 통한 firebase authentication 적용
- 중간에 git이 한번 꼬이는 바람에 `git reset`에 대해 스터디하고 `git reset --hard HEAD~1` 명령어로 이전 commit 내용으로 돌아감. ~~진땀 흘렸다..ㅠ~~(강의내용 x)
- `flex-basis`, `flex` : `flexbox`의 기능을 활용하여 입력폼의 디자인을 CSS로 구현하는 법을 배움
- image upload 버튼 클릭 시 로컬의 위치한 이미지 파일을 Cloudinary 내 스토리지로 업로드 후 업로드된 URL을 가져와 Client에 렌더링 - 자체적인 압축기능으로 훨씬 더 적은 용량의 이미지를 활용할 수 있었음
- `Firebase`

  1. `Auth.provider`를 통한 Google OAuth 로그인 구현
  2. `Realtime Database`로 생성한 명함 내 데이터를 로그인된 UserId 경로에 저장 - 명함 데이터 업로드 중 `Firebase Realtime Database permission denied`라는 에러와 함께 데이터가 저장되지 않는 문제가 발생했고, 해당 Realtime DB 콘솔 내 규칙을 바꿔줌으로써 문제 해결

- `memo`, `useCallback` : 수정되고 있는 컴포넌트 외의 다른 컴포넌트들이 함께 리렌더링되는 부분을 방지 및 최적화 - `useCallback` 사용 시 주의사항
- `Netlify` 를 통한 배포 - 배포 후 Firebase Authentication 내 승인된 도메인에 `Netlify deploy --prod` 로 생성된 URL을 추가하여 구글OAuth 로그인 문제 해결
