import { type Linter } from 'eslint'
import { GLOB_PACKAGEJSON, GLOB_TSCONFIG } from '../globs'

export const sortPackageJson: Linter.FlatConfig[] = [
  {
    files: [GLOB_PACKAGEJSON],
    rules: {
      'jsonc/sort-array-values': [
        'error',
        {
          order: { type: 'asc' },
          pathPattern: '^files$',
        },
      ],
      'jsonc/sort-keys': [
        'error',
        {
          order: [
            'name',
            'version',
            'private',
            'packageManager',
            'description',
            'type',
            'keywords',
            'license',
            'homepage',
            'bugs',
            'repository',
            'author',
            'contributors',
            'funding',
            'files',
            'main',
            'module',
            'types',
            'exports',
            'typesVersions',
            'sideEffects',
            'unpkg',
            'jsdelivr',
            'browser',
            'bin',
            'man',
            'directories',
            'publishConfig',
            'scripts',
            'peerDependencies',
            'peerDependenciesMeta',
            'optionalDependencies',
            'dependencies',
            'devDependencies',
            'engines',
            'config',
            'overrides',
            'pnpm',
            'husky',
            'lint-staged',
            'eslintConfig',
            'prettier',
          ],
          pathPattern: '^$',
        },
        {
          order: { type: 'asc' },
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
        },
        {
          order: ['types', 'require', 'import', 'default'],
          pathPattern: '^exports.*$',
        },
        {
          order: { type: 'asc' },
          pathPattern: '^resolutions$',
        },
        {
          order: { type: 'asc' },
          pathPattern: '^pnpm.overrides$',
        },
      ],
    },
  },
]

export const sortTsconfig: Linter.FlatConfig[] = [
  {
    files: GLOB_TSCONFIG,
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          order: ['extends', 'compilerOptions', 'references', 'files', 'include', 'exclude'],
          pathPattern: '^$',
        },
        {
          order: [
            /* Projects */
            'incremental',
            'composite',
            'tsBuildInfoFile',
            'disableSourceOfProjectReferenceRedirect',
            'disableSolutionSearching',
            'disableReferencedProjectLoad',
            /* Language and Environment */
            'target',
            'lib',
            'jsx',
            'experimentalDecorators',
            'emitDecoratorMetadata',
            'jsxFactory',
            'jsxFragmentFactory',
            'jsxImportSource',
            'reactNamespace',
            'noLib',
            'useDefineForClassFields',
            'moduleDetection',
            /* Modules */
            'module',
            'rootDir',
            'moduleResolution',
            'baseUrl',
            'paths',
            'rootDirs',
            'typeRoots',
            'types',
            'allowUmdGlobalAccess',
            'moduleSuffixes',
            'allowImportingTsExtensions',
            'resolvePackageJsonExports',
            'resolvePackageJsonImports',
            'customConditions',
            'resolveJsonModule',
            'allowArbitraryExtensions',
            'noResolve',
            /* JavaScript Support */
            'allowJs',
            'checkJs',
            'maxNodeModuleJsDepth',
            /* Emit */
            'declaration',
            'declarationMap',
            'emitDeclarationOnly',
            'sourceMap',
            'inlineSourceMap',
            'outFile',
            'outDir',
            'removeComments',
            'noEmit',
            'importHelpers',
            'importsNotUsedAsValues',
            'downlevelIteration',
            'sourceRoot',
            'mapRoot',
            'inlineSources',
            'emitBOM',
            'newLine',
            'stripInternal',
            'noEmitHelpers',
            'noEmitOnError',
            'preserveConstEnums',
            'declarationDir',
            'preserveValueImports',
            /* Interop Constraints */
            'isolatedModules',
            'verbatimModuleSyntax',
            'allowSyntheticDefaultImports',
            'esModuleInterop',
            'preserveSymlinks',
            'forceConsistentCasingInFileNames',
            /* Type Checking */
            'strict',
            'strictBindCallApply',
            'strictFunctionTypes',
            'strictNullChecks',
            'strictPropertyInitialization',
            'allowUnreachableCode',
            'allowUnusedLabels',
            'alwaysStrict',
            'exactOptionalPropertyTypes',
            'noFallthroughCasesInSwitch',
            'noImplicitAny',
            'noImplicitOverride',
            'noImplicitReturns',
            'noImplicitThis',
            'noPropertyAccessFromIndexSignature',
            'noUncheckedIndexedAccess',
            'noUnusedLocals',
            'noUnusedParameters',
            'useUnknownInCatchVariables',
            /* Completeness */
            'skipDefaultLibCheck',
            'skipLibCheck',
          ],
          pathPattern: '^compilerOptions$',
        },
      ],
    },
  },
]
