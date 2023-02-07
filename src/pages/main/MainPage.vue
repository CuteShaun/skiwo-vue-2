<template>
        <main class="user-list">
            <div class="mx-auto max-w-screen-lg px-4 pt -8 sm:px-8">
                <div class="flex items-center controls flex-wrap-reverse lg:flex-nowrap px-4 pt -8 sm:px-8 mb-5">
                    <SearchInput @set-search="setSearchQuery" />
                    <SortDropdown @set-sort="setSortQuery" :sort-query="state.sortQuery" />
                </div>
                <ProfileList
                    :users="state.users.results"
                    :loading="state.loading"
                    :search-query="state.searchQuery"
                    :sort-query="state.sortQuery"
                    @set-users="setUsers"
                />
                <BasePagination @set-users="setUsers" />
            </div>
        </main>
</template>

<script>
import ProfileList from "../../components/ProfileList/ProfileList.vue";
import BasePagination from "../../components/BasePagination/BasePagination.vue";
import SortDropdown from "../../components/SortDropdown/SortDropdown.vue";
import SearchInput from "../../components/SearchInput/SearchInput.vue";
import getUsers from "../../services/RandomUserService.js";
import { RANDOM_USER_URL } from "../../constants/constants";

export default {
    name: "main-page",
    components: {
        ProfileList,
        BasePagination,
        SortDropdown,
        SearchInput,
    },
    data: function () {
        return {
            state: { users: [], loading: false, searchQuery: '', sortQuery: '' },
        };
    },
    async created() {
        this.state.loading = true;
        this.state.users = await getUsers(RANDOM_USER_URL);
        this.state.loading = false;
    },
    methods: {
        setUsers: function (value) {
            this.state.loading = true;
            this.state.users = value;
            this.state.loading = false;
        },
        setSortQuery: function (query) {
            this.state.sortQuery = query;
        },
        setSearchQuery: function (query) {
            this.state.searchQuery = query;
        },
    },
};
</script>

<style>
.controls {
    position: relative;
}
</style>
