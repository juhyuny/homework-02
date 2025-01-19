# 커스텀 템플릿 구성

vite-react-ts

## 템플릿 폴더 생성

```bash
mkdir <템플릿_폴더_이름>
```

## Git 초기화

프로젝트 버전 관리를 위한 Git 초기화(initialization) 명령을 사용

```bash
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

## 라인 엔딩 설정

라인 엔딩(line ending)은 텍스트 파일에서 줄의 끝을 나타내는 문자나 문자 조합을 의미
UNIX 계열에서는 `\n`을 사용하지만, MS-DOS와 Windows에서는 `\r\n`을 사용
.gitattributes

```
* text eol=lf
```

## 에디터 구성 설정

다양한 에디터 및 IDE에서 프로젝트를 작업하는 여러 개발자를 위해 일관된 코딩 스타일을 유지하는 데 도움
.editorconfig

```
root = true

[*]
	indent_style = space
	indent_size = 2
	end_of_line = lf
	charset = utf-8
	trim_trailing_whitespace = false
	insert_final_newline = false
```

## 메타 데이터

패키지 매니저를 사용해 프로젝트를 관리하기 위한 메타 데이터 파일을 작성
package.json
.npmrc

## Vite 설치

vite 패키지를 개발 종속성 모듈로 설치

```bash
pnpm add vite -D
```

<details>
<summary>애플리케이션 개발 서버 구동, 빌드, 빌드 결과 미리보기 NPM 스크립트 명령어를 추가</summary>
<div markdown="1">

```json
"scripts": {
  "start": "pnpm dev --open",
  "dev": "vite --host",
  "build": "vite build",
  "preview": "vite preview"
}
```

</div>
</details>

서버 구동, 빌드, 미리보기

```bash
pnpm dev # 애플리케이션 개발 서버 구동
pnpm build # 애플리케이션 빌드
pnpm preview # 빌드 결과 미리보기
```

## Vite 구성파일

<details>
<summary>vite.config.js</summary>
<div markdown="1">

```js
import { defineConfig } from "vite";

/\*_ @type {import('vite').UserConfig} _/;
export default defineConfig({
  server: {
    host: "localhost",
    port: 3000,
  },
  preview: {
    port: 8080,
  },
});
```

</div>
</details>

```bash
pnpm dev # 개발 서버 구동
pnpm preview # 프리뷰 서버 구동

```

## React & React DOM 구성

react, react-dom 패키지 개발 종속성 모듈로 설치

```bash
pnpm add react@19 react-dom@19
pnpm add @types/{react,react-dom} -D # 타입 정의
```

## React 플러그인 구성

프로젝트 @vitejs/plugin-react 플러그인 설치

```
pnpm add @vitejs/plugin-react -D
```

<details>
<summary>vite.config.js</summary>
<div markdown="1">

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/\*_ @type {import('vite').UserConfig} _/;
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
  server: {
    host: "localhost",
    port: 3000,
  },
  preview: {
    port: 8080,
  },
});
```

</div>
</details>

플러그인이 설정되면 이제 import React from 'react' 구문은 생략
main.jsx

## Typescript 구성

typescript 패키지 설치

```
pnpm add typescript -D
```

## Typescript 구성 파일

tsconfig.json + 파일에 참조(references)하는 2개의 JSON 파일

<details>
<summary>tsconfig.json</summary>
<div markdown="1">

```json
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ]
}
```

</div>
</details>

<details>
<summary>tsconfig.app.json</summary>
<div markdown="1">

React 앱 개발에 사용된 src 폴더의 TypeScript 파일 컴파일에 사용

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* 번들러 모드 */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* 린팅 */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```

</div>
</details>

<details>
<summary>tsconfig.node.json</summary>
<div markdown="1">

tsconfig.node.json 설정은 vite.config.ts 파일 컴파일에 사용

```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* 번들러 모드 */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,

    /* 린팅 */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
```

</div>
</details>

## Client 타입 정의 참조

TypeScript 파일에서 이미지, 폰트, 스타일시트 파일 등을 불러오려 시도하면 오류가 발생
이미지, 폰트, 스타일시트 파일에 대한 타입 정의가 필요

vite-env.d.ts

```
/// <reference types="vite/client" />
```
