# Lingo - AI 영어 회화 서비스

AI와 영어로 대화할 수 있는 서비스입니다. 본 프로젝트는 frontend와 backend로 구성된 모노레포 구조입니다.

## 기술 스택

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- ESLint + Prettier

### Backend
- NestJS
- TypeScript
- ESLint + Prettier

## 시작하기

### 필수 조건
- Node.js 16 이상
- pnpm 8 이상

### 설치
```bash
# 의존성 설치
pnpm install
```

### 개발 모드 실행
```bash
# 프론트엔드와 백엔드 동시 실행
pnpm dev

# 프론트엔드만 실행
pnpm dev:frontend

# 백엔드만 실행
pnpm dev:backend
```

### 빌드
```bash
# 프론트엔드와 백엔드 동시 빌드
pnpm build

# 프론트엔드만 빌드
pnpm build:frontend

# 백엔드만 빌드
pnpm build:backend
```

## 프로젝트 구조
```
lingo/
├── apps/
│   ├── frontend/         # React 애플리케이션
│   │   ├── src/
│   │   ├── index.html
│   │   └── ...
│   └── backend/          # NestJS 애플리케이션
│       ├── src/
│       └── ...
├── pnpm-workspace.yaml
└── README.md
```

## 코드 품질 관리

각 패키지(frontend, backend)는 자체적인 ESLint, Prettier, husky 및 lint-staged 설정을 가지고 있습니다. 
Git 커밋 시 변경된 코드가 있는 디렉토리에서만 해당 검사가 실행됩니다.

## 라이센스
ISC
