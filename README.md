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
import { defineConfig } from 'vite';

/\*_ @type {import('vite').UserConfig} _/;
export default defineConfig({
  server: {
    host: 'localhost',
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
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/\*_ @type {import('vite').UserConfig} _/;
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
  ],
  server: {
    host: 'localhost',
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

## ESLint 린팅 구성

- [eslint](https://npmjs.com/package/eslint)
- [globals](https://npmjs.com/package/globals)
- [@eslint/js](https://npmjs.com/package/@eslint/js)
- [typescript-eslint](https://npmjs.com/package/typescript-eslint)
- [eslint-plugin-react](https://npmjs.com/package/eslint-plugin-react)

```
pnpm create @eslint/config@latest
```

## ESLint 플러그인 추가 구성

- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh)
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)

```
pnpm add eslint-plugin-react-{refresh,hooks} eslint-plugin-jsx-a11y -D
```

설치한 플러그인 설정을 eslint.config.js 파일에 추가

<details>
<summary>eslint.config.js</summary>
<div markdown="1">

```js
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default tseslint.config(
  {
    ignores: ['dist'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    ...jsxA11y.flatConfigs.recommended,
    settings: {
      react: {
        version: '19.0.0',
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: { jsx: true },
      },
    },
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  }
);
```

</div>
</details>

## ESLint 린팅 명령 추가

```
"scripts": {
  "lint": "eslint --cache src"
}
```

```
pnpm lint
```

## Prettier 포멧팅 구성

사용해 일관된 코드를 구성할 수 있도록 prettier 패키지를 프로젝트에 설치

```
pnpm add prettier -D
```

## Prettier 포멧터 구성

<details>
<summary>prettier.config.cjs</summary>
<div markdown="1">

```
module.exports = {
  // 화살표 함수 식 매개변수 () 생략 여부 (ex: (a) => a)
  arrowParens: 'always',
  // 닫는 괄호(>) 위치 설정
  // ex: <div
  //       id="unique-id"
  //       class="contaienr"
  //     >
  htmlWhitespaceSensitivity: 'css',
  bracketSameLine: false,
  // 객체 표기 괄호 사이 공백 추가 여부 (ex: { foo: bar })
  bracketSpacing: true,
  // 행폭 설정 (줄 길이가 설정 값보다 길어지면 자동 개행)
  printWidth: 80,
  // 산문 래핑 설정
  proseWrap: 'preserve',
  // 객체 속성 key 값에 인용 부호 사용 여부 (ex: { 'key': 'xkieo-xxxx' })
  quoteProps: 'as-needed',
  // 세미콜론(;) 사용 여부
  semi: true,
  // 싱글 인용 부호(') 사용 여부
  singleQuote: true,
  // 탭 너비 설정
  tabWidth: 2,
  // 객체 마지막 속성 선언 뒷 부분에 콤마 추가 여부
  trailingComma: 'es5',
  // 탭 사용 여부
  useTabs: false,
};
```

</div>
</details>

## Prettier 포멧 명령 추가

package.json

```
"scripts": {
  "format": "prettier --cache src"
}
```

## 절대 경로 수정

Vite 프로젝트에서 절대 경로(absolute path)를 사용하려면 resolve.alias 설정이 필요

<details>
<summary>vite.config.ts</summary>
<div markdown="1">

```
import { fileURLToPath } from 'node:url';

export default defineConfig({
	// ...
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
```

```
import * as path from 'node:path';

export default defineConfig({
	// ...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

</div>
</details>

하지만 VS Code는 @ 별칭 절대 경로에 대한 정보가 없으므로 정상적인 파일 탐색이 되지않음.
문제 해결을 위해 tsconfig.app.json 파일에 다음 구성을 추가해 VS Code에서 파일 탐색이 가능하도록 설정

tsconfig.app.json

```
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

```
pnpm add @types/node -D
```

## Husky

허스키는 푸시 할 때 린팅, 테스트 등을 수행하여 Git 커밋을 향상시키는데 도움을 주는 도구

설치 및 자동 구성
husky-init 명령을 사용해 프로젝트에 허스키를 손쉽게 자동 구성

```
pnpm add husky -D
pnpm exec husky init
```

## lint-staged

설치

```
pnpm add lint-staged -D
```

구성

`package.json` 파일에 `lint-staged` 항목을 추가하고, 사전에 설정한 린팅, 포멧팅 명령을 설정

package.json

```json
"lint-staged": {
  "src/**/*.{ts,tsx}": [
    "pnpm lint",
    "pnpm format"
  ]
}
```

pre-commit 훅

pre-commit 파일을 작성한 뒤 pnpm lint-staged 명령을 입력하면 커밋하기 전 린팅, 포멧팅을 수행합니다.

.husky/pre-commit

```
#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

pnpm lint-staged
```
