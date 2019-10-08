<template>
    <div class="component">
        <h1>The User Component</h1>
        <v-card>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <p>Name is {{ name }}</p>
        <p>Age is {{ age }}</p>
        </v-card>
        <hr>
        <v-card>
        <div class="row">
            <v-card>
                <app-user-detail
                        :myName="name"
                        @nameWasReset="name = $event"
                        :resetFn="resetName"
                        :userAge="age"></app-user-detail>
            </v-card>
            <v-card>
                <app-user-edit
                        :userAge="age"
                        @ageWasEdited="age = $event"
                ></app-user-edit>
            </v-card>
        </div>
        </v-card>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function () {
            return {
                name: 'Max',
                age: 27
            };
        },
        methods: {
            changeName() {
                this.name = 'Anna';
            },
            resetName() {
                this.name = 'Max';
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
