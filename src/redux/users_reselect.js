import { createSelector } from "reselect"

export const users = (state) => {
    return state.users.users
}

export const totalCount = (state) => {
    return state.users.totalCount
}

export const pageSize = (state) => {
    return state.users.pageSize
}

export const correntPage = (state) => {
    return state.users.correntPage
}

export const IsFetching = (state) => {
    return state.users.IsFetching
}

export const followingInProgress = (state) => {
    return state.users.followingInProgress
}