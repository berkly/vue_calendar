<template>
<div class= "container">
    <div class="row">
        <div class="col-sm-12">
           <div class="btn-group">
               <button @click.stop="goToday" class="btn btn-outline btn-default today-button">Егор</button>
               <button @click.stop="goPrev" class="btn btn-outline btn-default">Александр</button>
               <button @click.stop="goNext" class="btn btn-outline btn-default">Михаил</button>
               <button @click.stop="goToday" class="btn btn-outline btn-default today-button">Ольга</button>
               <button @click.stop="goPrev" class="btn btn-outline btn-default">Тимофей</button>
               <button @click.stop="goNext" class="btn btn-outline btn-default">Евгений</button>
               <button @click.stop="goNext" class="btn btn-outline btn-default">Юлия</button>
               <button @click.stop="goNext" class="btn btn-outline btn-default">Матвей</button>
               <button @click.stop="goNext" class="btn btn-outline btn-default">Никита</button>
               <button @click.stop="goNext" class="btn btn-outline btn-default">Артем</button>
               <button @click.stop="goNext" class="btn btn-outline btn-default">Максим</button>
               <button type="button" class="btn btn-outline" @click="showModal">Open Modal!</button>
                    <modal
                        v-show="isModalVisible"
                        @close="closeModal"
                    />
           </div>
        </div>
    </div>
    <br>

    <div class="row">
        <div class="col-sm-4">
           <div class="btn-group">
               <button @click.stop="goToday" class="btn btn-outline btn-default today-button">Сегодня</button>
               <button @click.stop="goPrev" class="btn btn-outline btn-default">&lt;</button>
               <button @click.stop="goNext" class="btn btn-outline btn-default">&gt;</button>
           </div>
        </div>
        <div class="col-sm-4">
            <div class="title"> {{title}}</div>
        </div>
        <div class="col-sm-4 header-center">
            <div class="btn-group">
                <button @click.stop="goPrev" class="btn btn-outline btn-default">День</button>
                <button @click.stop="goToday" class="btn btn-outline btn-default today-button">Неделя</button>
                <button @click.stop="goNext" class="btn btn-outline btn-default">Месяц</button>
            </div>
        </div>
    </div>
    
</div>
</template>
<script>
    import modal from './modal.vue';
    import moment from 'moment';
    import {CHANGE_MONTH} from '../actions';

    export default {
        data (){
            return {
                localeSelect:'ru',
                isModalVisible: false,
            }
        },
        props : {
            currentMonth : {},
            locale       : {
                type: String
            }
        },
        components: {
            modal,
        },
        computed: {
            title () {
                if (!this.currentMonth) return;
                return this.currentMonth.locale("ru").format('D MMMM YYYY')
            }
        },
        methods : {
            goPrev () {
                let payload = moment(this.currentMonth).subtract(1, 'months').startOf('month');
                this.$root.$emit(CHANGE_MONTH, payload);
            },
            goNext () {
                let payload = moment(this.currentMonth).add(1, 'months').startOf('month');
                this.$root.$emit(CHANGE_MONTH, payload);
            },
            goToday () {
                this.$root.$emit(CHANGE_MONTH, moment());
            },
            setLocale () {
                if(i18n) {
                    i18n.locale = this.localeSelect;
                }
                else {
                    console.warn('Please define global vue locale object named "i18n"!');
                }
            },
            showModal() {
                this.isModalVisible = true;
            },
            closeModal() {
                this.isModalVisible = false;
            }
        }
    }
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Lato');

    .full-calendar-header{
        display: flex;
        align-items: center;
    }
    .header-center{
        flex:3;
        text-align:center;
    }
    .title {
        text-align: center;
        font-size: 2em;
        font-weight:inherit;
    }
    .language-select {
        display: inline-block;
        width: 50%;
    }
    
</style>