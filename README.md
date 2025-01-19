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
