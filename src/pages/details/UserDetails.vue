<template>
        <div class="m-10 max-w-sm m-auto">
            <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
                <div class="relative mx-auto w-36 rounded-full">
                    <img
                        class="mx-auto h-auto w-full rounded-full"
                        :src="person?.picture?.large"
                        alt="large avatar"
                    />
                </div>
                <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">
                    {{ person.name.first }} {{ person.name.last }}
                </h1>
                <h3 class="font-lg text-semibold text-center leading-6 text-gray-600">
                    Location: {{ person.location.city }}
                </h3>
                <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, placeat!
                </p>
                <ul
                    class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow"
                >
                    <li class="flex items-center py-3 text-sm">
                        <span>Nationality</span>
                        <span class="ml-auto"
                            ><span
                                class="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700"
                                >{{ person.nat }}</span
                            ></span
                        >
                    </li>
                    <li class="flex items-center py-3 text-sm">
                        <span>Nickname</span>
                        <span class="ml-auto">{{ person.login.username }}</span>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
    name: "user-details",
    props: { prop: Array, id: String, name: String, person: Object },
};
</script>
