<template>
    <fragment name="profile-card">
        <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm text-left">
            <p class="whitespace-no-wrap">
                {{ person.id.value?.replace(/\s/g, "").slice(0, 5) || `no id` }}
            </p>
        </td>
        <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm">
            <div class="flex items-center">
                <div class="h-10 w-10 flex-shrink-0">
                    <img
                        class="h-full w-full rounded-full"
                        :src="person.picture.thumbnail"
                        alt="small avatar"
                    />
                </div>
                <div class="ml-3">
                    <router-link
                        :to="{
                            name: 'details',
                            params: { id: person.name.first + person.name.last, person: person },
                        }"
                    >
                        <p class="whitespace-no-wrap">
                            {{ person.name.first }} {{ person.name.last }}
                        </p>
                    </router-link>
                </div>
            </div>
        </td>
        <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm text-left">
            <p class="whitespace-no-wrap">{{ person.email }}</p>
        </td>
        <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm text-left">
            <p class="whitespace-no-wrap">{{ person.dob.age }}</p>
        </td>

        <td class="border-b border-gray-200 bg-white px-5 py-5 text-sm text-left">
            <span
                class="rounded-full px-3 py-1 text-xs font-semibold"
                :class="[getGenderBg[person.gender], getGenderColor[person.gender]]"
                >{{ person.gender }}</span
            >
        </td>
    </fragment>
</template>

<script>
import Fragment from "vue-fragment";
import Vue from "vue";
import "../../index.css";

export default {
    name: "ProfileCard",
    computed: {
        getGenderBg() {
            return {
                male: "bg-green-200",
                female: "bg-pink-200",
                other: "bg-purple-200",
            };
        },
        getGenderColor() {
            return {
                male: "text-green-900",
                female: "text-pink-900",
                other: "text-purple-900",
            };
        },
    },
    props: {
        person: Object,
    },
};

Vue.use(Fragment.Plugin);
</script>
