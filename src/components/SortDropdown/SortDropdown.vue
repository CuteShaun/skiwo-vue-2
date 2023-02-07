<template>
    <div class="select mb-3 cs:mb-0">
        <select id="standard-select" :value="sortQuery ? sortQuery : 'Sort by'" selected="Sort by" @input="sendSortQuery">
            <option disabled selected value="Sort by">Sort by</option>
            <option>Name</option>
            <option>Age</option>
            <option>No sort</option>
        </select>
    </div>
</template>

<script>
export default {
    name: "SortDropdown",
    props: {
        sortQuery: String,
    },
    methods: {
        sendSortQuery: function (e) {
            this.$emit("set-sort", e.target.value);
        },
    },
};
</script>

<style scoped>
select {
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;
    padding: 12px 20px;
    z-index: 1;
    outline: none;
}
select::-ms-expand {
    display: none;
}
.select {
    display: grid;
    grid-template-areas: "select";
    align-items: center;
    position: relative;
    min-width: 10ch;
    max-width: 30ch;
    border: 1px solid var(--select-border);
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    padding-right: 7px;
    line-height: 1.1;
}

.select:hover {
    background-color: var(--brand-color-light);
    border-color: transparent;
    color: white;
}
.select select,
.select::after {
    grid-area: select;
}
.select:not(.select--multiple)::after {
    content: "";
    justify-self: end;
    width: 0.8em;
    height: 0.5em;
    background-color: var(--select-arrow);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
}
select:focus + .focus {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid var(--select-focus);
    border-radius: inherit;
}
select[multiple] {
    padding-right: 0;
    height: 6rem;
}
select[multiple] option {
    white-space: normal;
    outline-color: var(--select-focus);
}
label {
    font-size: 1.125rem;
    font-weight: 500;
}
.select + label {
    margin-top: 2rem;
}
</style>
