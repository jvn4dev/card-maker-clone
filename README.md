# 💳 Business Card Maker 
사용자가 정해진 양식을 통해 이미지와 정보들을 입력하면 정해진 명함 디자인으로 디자인을 변경해줍니다.
해당 프로젝트를 진행하면서 얻어가려는 것들은 아래와 같습니다. 

<br />

## 📝 프로젝트를 통해 이 친구들을 배웁니다
- `React Hooks`
- `PostCSS`
- `React Router` : React Routing 을 도와주는 라이브러리
- `Firebase` : Authentication, realtime Database
- `Cloudinary` : 사용자의 이미지를 서버에 업로드 가능

---
<br />

## 🕸 **Routing?** in web
- ### a mechanism where HTTP requests gets link to specific web pages/resources.
- ### Router determines which pages should be open when a user visits a certain path.

<br />

## 🔥 **Firebase**
- ### Authentication with secure (OAuth)
- ### Firestore, Storage, Realtime DB
- ### Crashlytics : App이 죽었을 때 error log 등을 편하게 볼 수 있도록 도와줍니다. 

<br />

## ☁️ **Cloudinary**
- ### Firebase 의 Storage를 써도 되지만 이는 사용자의 원파일을 그대로 저장하는 반면, Cloudinary는 사용자가 업로드한 이미지를 우리가 원하는대로 사이즈를 재조정하거나 이미지와 미디어에 관련된 더 다양한 기능들을 활용할 수 있습니다. 

<br />

# 🍎 Things I learned
- `cp -R template card-maker` : tmp 파일을 활용하여 초기 react project 생성
- `@value key: value` : PostCSS를 활용해 common폴더 내 `color`, `size` 파일로 전역변수를 설정하여 프로젝트에서 쓰이는 CSS 값들을 변수처럼 활용 