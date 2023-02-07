<template>
    <div
        class="search relative mr-11 flex w-full max-w-2xl items-center justify-between rounded-md border shadow-lg"
    >
        <svg
            class="absolute left-2 block h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <circle cx="11" cy="11" r="8" class=""></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
        </svg>
        <input
            type="name"
            name="search"
            class="h-10 w-full rounded-md py-6 pr-40 pl-12 outline-none focus:ring-2"
            placeholder="Search by name"
            @change="setSearchText"
            @keyup.enter="sendSearchText"
        />
        <button
            type="button"
            @click="sendSearchText"
            class="search__button absolute right-0 mr-1 inline-flex h-10 items-center justify-center rounded-lg px-10 font-medium text-white focus:ring-4 hover:bg-gray-700"
        >
            Search
        </button>
    </div>
</template>

<script>

export default {
    name: "SearchInput",
    data: function () {
        return {
            searchText: "",
        };
    },
    props: {
        method: { type: Function },
    },
    methods: {
        setSearchText: function (event) {
            this.searchText = event.target.value;
        },
        sendSearchText: function () {
            this.$emit("set-search", this.searchText);
        },
    },
};
</script>

<style scoped>
.search__button {
    background-color: var(--brand-color);
}

.search__button:hover {
    opacity: 0.65;
}
</style>
