<template>
  <div class="flex flex-col">
    <div class="flex justify-between p-4">
      <router-link class="icon flex justify-center items-center" to="/folders"><i class="icon fa-lg fas fa-chevron-left mr-1"></i> Back</router-link>
      <router-link class="icon" to="/notes"><i class="icon fa-lg fas fa-ellipsis-h"></i></router-link>
    </div>
    <div class="notes">
      <div class="notes__header">
        <h1>Notes</h1>
      </div>
      <div class="notes__search">
        <input placeholder="Search" type="text" name="search" id="search">
      </div>
      <div class="mt-4 notes__projects">
        <div class="single">
          <router-link to='note/1' class="flex flex-col">
            <h4><strong>Note 1....</strong></h4>
            <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, consequatur.</h5>
          </router-link>
        </div>
         <div class="single">
          <router-link to="note/1" class="flex flex-col">
            <h4><strong>Note 2....</strong></h4>
            <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, consequatur.</h5>
          </router-link>
        </div>
      </div>
    </div>
    <div class="notes__footer">
      <span><small>2 Notes</small></span>
      <router-link to="/note/create"><i class="icon fa-lg far fa-edit"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

  .notes__{
    &header-sub{
      color: #111827;
      font-weight: 700;
      font-size: 1.2em;
      margin-top: 1em;
      margin-bottom: 0.5em;
      line-height: 1.3333333;
      margin-left: 0.5em;
    }

    &projects{
      background: white;
      padding: 0px 10px;
      border-radius: 10px;
      
      & .single{
        display: grid;
        grid-template-columns: 90% 10%;
        align-items: center;
        padding: 8px;

        & .num{
          color: rgb(167, 167, 167);
          text-align: right;
        }

        & a>h5{
          color: rgb(167, 167, 167);
        }
      }
    }

    &footer{
      border-top: 1px solid #cacaca;
      height: 45px;
      position: absolute;
      padding: 0px 15px;
      align-content: center;
      justify-content: center;
      display: grid;
      grid-template-columns: 95% 5%;
      background: #F9F8FB;
      bottom: 0;
      width: 100%;
        & a,span{
          display: flex;
          align-items: center;
          justify-content: center;
        }
    }
  }
 
</style>