# 커스텀 템플릿 구성

## 템플릿 폴더 생성

```
mkdir <템플릿_폴더_이름>
```

## Git 초기화

프로젝트 버전 관리를 위한 Git 초기화(initialization) 명령을 사용

```
git init
```

## Git 관리 제외

Git 관리 제외 항목
.gitignore

```
node_modules
dist

.DS_Store
.env
```

또는
npx 명령으로 add-gitignore 패키지 설치

```
npx add-gitignore mac windows node visualtudiocode
```
