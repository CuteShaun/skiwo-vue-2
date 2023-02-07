<template>
    <div class="mx-auto max-w-screen-lg px-4 pb-8 sm:px-8">
        <div class="flex flex-col items-center border rounded-b-lg bg-white px-5 py-5 sm:flex-row">
            <paginate
                :page-count="50"
                :click-handler="getNewUsersPage"
                :prev-text="'<'"
                :next-text="'>'"
                :container-class="'pagination-container'"
            >
            </paginate>
        </div>
    </div>
</template>

<script>
import Paginate from "vuejs-paginate";
import getUsers from "../../services/RandomUserService.js";
import { RANDOM_USER_URL_PAGE } from "../../constants/constants";
import "../../index.css";

export default {
    name: "BasePagination",
    components: { Paginate },
    props: {
        method: { type: Function },
    },

    methods: {
        getNewUsersPage: async function (selectedPage) {
            const url = `${RANDOM_USER_URL_PAGE}${selectedPage}`;
            const users = await getUsers(url);
            this.$emit("set-users", users);
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.pagination-container {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
}

.pagination-container li:not(li.active):hover {
    background-color: var(--brand-color-light);
}

.pagination-container li a {
    display: block;
    padding: 6px 13px;
    width: 100%;
}

.pagination-container li {
    border-radius: 6px;
    cursor: pointer;
}

.pagination-container .disabled {
    background-color: transparent;
    pointer-events: none;
    user-select: none;
}

li.active {
    font-weight: bold;
    color: white;
    background-color: var(--brand-color);
}

.active:hover {
    opacity: 0.65;
}
</style>
