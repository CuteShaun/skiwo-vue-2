<template>
    <section class="user-list">
        <div class="mx-auto max-w-screen-lg px-4 pt -8 sm:px-8">
            <user-skeletons v-if="loading" />
            <div v-if="!loading" class="overflow-y-hidden rounded-lg border">
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr
                                class="bg-brand text-left text-xs font-semibold uppercase tracking-widest text-white"
                            >
                                <th class="px-5 py-3">ID</th>
                                <th class="px-5 py-3">Full Name</th>
                                <th class="px-5 py-3">Email</th>
                                <th class="px-5 py-3">Age</th>
                                <th class="px-5 py-3">Gender</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-500">
                            <tr v-for="person in state.userList" :key="person.id.value">
                                <ProfileCard :person="person" />
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ProfileCard from "../ProfileCard/ProfileCard.vue";
import UserSkeletons from "../../skeletons/UserSkeletons.vue";
import { getFilteredList, getSortedList } from "../../helpers/helpers";

export default {
    name: "ProfileList",
    components: { ProfileCard, UserSkeletons },
    data: function () {
        return {
            state: {
                userList: [],
            },
        };
    },
    props: {
        users: Array,
        loading: Boolean,
        searchQuery: String,
        sortQuery: String,
    },
    watch: {
        users: function () {
            this.state.userList = this.users;
        },
        searchQuery: function () {
            this.state.userList = getFilteredList([...this.users], this.searchQuery);
        },
        sortQuery: function () {
            this.state.userList = getSortedList([...this.users], this.sortQuery);
        },
    },
};
</script>
