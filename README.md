A set of useful scripts for creating FSD Directory Architecture

## Installation

```bash
npm install create-fsd-directories --save-dev
```

# Examples

```bash
npx create-dir f MyFeature
```

Will create

```
project/
└── src/
    └── features/
        └── MyFeature/
            ├── lib/
            │   └──index.ts
            ├── models/
            │   └──index.ts
            ├── ui/
            │   └──index.ts
            └──index.ts
```

---

```bash
npx create-dir e MyEntitie
```

Will create

```
project/
└── src/
    └── entities/
        └── MyEntitie/
            ├── lib/
            │   └──index.ts
            ├── models/
            │   └──index.ts
            ├── ui/
            │   └──index.ts
            └──index.ts
```

---

```bash
npx create-dir w MyWidget
```

Will create

```
project/
└── src/
    └── widgets/
        └── MyWidget/
            ├── lib/
            │   └──index.ts
            ├── models/
            │   └──index.ts
            ├── ui/
            │   └──index.ts
            └──index.ts
```
