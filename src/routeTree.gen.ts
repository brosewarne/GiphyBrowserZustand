/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const TrendingLazyImport = createFileRoute('/trending')()
const SearchLazyImport = createFileRoute('/search')()
const SavedLazyImport = createFileRoute('/saved')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const TrendingLazyRoute = TrendingLazyImport.update({
  path: '/trending',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/trending.lazy').then((d) => d.Route))

const SearchLazyRoute = SearchLazyImport.update({
  path: '/search',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/search.lazy').then((d) => d.Route))

const SavedLazyRoute = SavedLazyImport.update({
  path: '/saved',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/saved.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/saved': {
      id: '/saved'
      path: '/saved'
      fullPath: '/saved'
      preLoaderRoute: typeof SavedLazyImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchLazyImport
      parentRoute: typeof rootRoute
    }
    '/trending': {
      id: '/trending'
      path: '/trending'
      fullPath: '/trending'
      preLoaderRoute: typeof TrendingLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/saved': typeof SavedLazyRoute
  '/search': typeof SearchLazyRoute
  '/trending': typeof TrendingLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/saved': typeof SavedLazyRoute
  '/search': typeof SearchLazyRoute
  '/trending': typeof TrendingLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/saved': typeof SavedLazyRoute
  '/search': typeof SearchLazyRoute
  '/trending': typeof TrendingLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/saved' | '/search' | '/trending'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/saved' | '/search' | '/trending'
  id: '__root__' | '/' | '/saved' | '/search' | '/trending'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  SavedLazyRoute: typeof SavedLazyRoute
  SearchLazyRoute: typeof SearchLazyRoute
  TrendingLazyRoute: typeof TrendingLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  SavedLazyRoute: SavedLazyRoute,
  SearchLazyRoute: SearchLazyRoute,
  TrendingLazyRoute: TrendingLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/saved",
        "/search",
        "/trending"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/saved": {
      "filePath": "saved.lazy.tsx"
    },
    "/search": {
      "filePath": "search.lazy.tsx"
    },
    "/trending": {
      "filePath": "trending.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
