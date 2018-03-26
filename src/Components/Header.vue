<template>
<div class="container">
    <div class="row">
        <div class="col-sm-12">
           <div class="btn-group">
               <button class="btn btn-outline btn-default">Егор</button>
               <button class="btn btn-outline btn-default">Александр</button>
               <button class="btn btn-outline btn-default">Михаил</button>
               <button class="btn btn-outline btn-default">Ольга</button>
               <button class="btn btn-outline btn-default">Тимофей</button>
               <button class="btn btn-outline btn-default">Евгений</button>
               <button class="btn btn-outline btn-default">Юлия</button>
               <button class="btn btn-outline btn-default">Матвей</button>
               <button class="btn btn-outline btn-default">Никита</button>
               <button class="btn btn-outline btn-default">Артем</button>
               <button class="btn btn-outline btn-default">Максим</button>
           </div>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-sm-4 header-center">
            <div class="btn-group">
                <button @click.stop="goPrev" class="btn btn-primary">&lt;
                    <span v-if="$i18n">{{ $t('generic.previous')}}</span>
                    <span v-else>Previous</span>
                </button>

                <button @click.stop="goToday" class="btn btn-secondary today-button">
                    <span v-if="$i18n">{{ $t('generic.today')}}</span>
                    <span v-else>Today</span>
                </button>

                <button @click.stop="goNext" class="btn btn-primary">
                    <span v-if="$i18n">{{ $t('generic.next')}}</span> 
                    <span v-else>Next</span>
                    &gt;
                </button>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="title"> {{title}}</div>
        </div>
    </div>
</div>
</template>
<script>
    import moment from 'moment';
    import {CHANGE_MONTH} from '../actions';

    export default {
        props : {
            currentMonth : {},
            locale       : {
                type: String
            }
        },

        data (){
            return {
                localeSelect:'en'
            }
        },

        computed: {
            title () {
                if (!this.currentMonth) return;
                return this.currentMonth.locale(this.locale).format('MMMM YYYY')
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
            }
        }
    }
</script>
<style>
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
        font-size: 1.5em;
        font-weight: bolder;
    }
    .language-select {
        display: inline-block;
        width: 50%;
    }
</style>