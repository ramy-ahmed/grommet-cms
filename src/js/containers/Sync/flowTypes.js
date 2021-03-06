// @flow
export type LOAD_DATA_INITIATION_TYPE = 'SYNC/LOAD_DATA_INITIATION';
export type LOAD_DATA_SUCCESS_TYPE = 'SYNC/LOAD_DATA_SUCCESS';
export type LOAD_DATA_FAILURE_TYPE = 'SYNC/LOAD_DATA_FAILURE';
export type RESET_DATA_TYPE = 'SYNC/RESET_DATA';

export type SyncAction = {
  type: LOAD_DATA_INITIATION_TYPE | LOAD_DATA_SUCCESS_TYPE
    | LOAD_DATA_FAILURE_TYPE | RESET_DATA_TYPE,
  error?: { message: string },
  success?: boolean
}

export type SyncProps = {
  dispatch: Dispatch,
  actions: {
    loadPageTypes: Function
  },
  routeActions: {
    getRoutes: Function
  },
  syncActions: {
    resetData: Function,
    sync: Function
  },
  error: { message: string },
  isRoutesLoading: boolean,
  routes: Array<Object>,
  syncError: ?string,
  syncRequest: boolean,
  syncSuccess: boolean,
  pageTypes: Array<Object>
}

export type SyncState = {
  isLoading: boolean,
  error?: { message: string },
  success?: boolean
}
