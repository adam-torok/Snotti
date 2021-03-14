<template>
  <div class="flex flex-col">
    <div class="flex justify-end p-2">
      <router-link class="icon" to="/notes">Edit</router-link>
    </div>
    <div class="notes">
      <div class="notes__header">
        <h1>Folders</h1>
      </div>
      <div class="notes__search">
        <input placeholder="Search" type="text" name="search" id="search">
      </div>
      <div class="notes__header-sub">
        <h1>Folders</h1>
      </div>
      <div class="notes__projects">
        <router-link to="/notes" class="single">
          <i class="icon fa-lg far fa-folder"></i>
          <h4>All Notes</h4>
          <h5 class="num">2</h5>
        </router-link>
      </div>
    </div>
    <div class="notes__footer">
      <router-link to="/note/create"><i class="icon fa-lg fas fa-folder-plus"></i></router-link>
      <router-link to="/note/create"><i class="icon fa-lg far fa-edit"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

  .notes{
    margin: 0px 60px;
  }

  .notes__{

    &header{
      color: #111827;
      font-weight: 700;
      font-size: 1.5em;
      margin-top: 2em;
      margin-bottom: 0.5em;
      line-height: 1.3333333;
    }

    &header-sub{
      color: #111827;
      font-weight: 700;
      font-size: 1.2em;
      margin-top: 1em;
      margin-bottom: 0.5em;
      line-height: 1.3333333;
      margin-left: 0.5em;
    }

    &search>input{
      width:100%;
      padding: 5px;
      background: #E0DEE8;
      border-radius: 10px;
      outline: none!important;
    }

    &search>input::placeholder{

    }

    &projects{
      background: white;
      padding: 0px 10px;
      border-radius: 10px;
      
      & .single{
        display: grid;
        grid-template-columns: 8% 80% 12%;
        align-items: center;
        padding: 8px;

        & .num{
          color: rgb(167, 167, 167);
          text-align: right;
        }
      }

      & .single:not(:last-child){
        border-bottom: 1px solid #e5e5e5;
      }
    }

    &footer{
        border-top: 1px solid #cacaca;
        height: 45px;
        position: absolute;
        padding: 0px 15px;
        justify-content: space-between;
        align-content: center;
        display: flex;
        background: #F9F8FB;
        bottom: 0;
        width: 100%;
        & a{
          display: flex;
          justify-content: center;
          align-items: center;
        }
    }
  }
  .icon{
    color: #FFD100;
  }
 
</style>