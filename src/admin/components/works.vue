<template lang="pug">
    .works-wrapper
      h2.works__title Страница «Мои работы» 
      .works
        .works__fields
          input(type="text" placeholder="Название проекта" v-model="work.title")
          br
          input(type="text" placeholder="Технологии" v-model="work.techs")
          br
          input(type="text" placeholder="Ссылка" v-model="work.link")
          br
          input(type="file" @change="renederPicAndAddToData" ) 
          hr
          .preview(:style="{backgroundImage: previewPic}")
          hr
          button(type="button" @click="editmode ? editWork(work) : addNewWork(work)") {{editmode ? "Изменить" : "Добавить"}}
        .works__table
          table.table
            tr
              td Название
              td Технологии
              td Ссылка
              td Превью
              td
            tr(v-for="work in works")
              td {{work.title}}
              td {{work.techs}}
              td {{work.link}}
              td
                img(width="100", height="100" alt="" :src="`https://webdev-api.loftschool.com/${work.photo}`")
              td
                button(type="button", @click="") Удалить
                button(type="button", @click="editExistedWork(work)") Изменить

</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      previewPic: "",
      editmode: false,
      work: {
        id: 0,
        title: "",
        techs: "",
        link: "",
        photo: ""
      }
    };
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    })
  },
  created() {
    let id = this.$store.state.user.id;

    this.fetchWorks(id);
  },
  methods: {
    ...mapActions({
      addNewWork: "works/add",
      fetchWorks: "works/fetch",
      editWorks: "works/edit"
    }),
    editExistedWork(existedWork) {
      this.editmode = true;
      this.work.id = existedWork.id;
      this.work.title = existedWork.title;
      this.work.link = existedWork.link;
      this.work.techs = existedWork.techs;
      this.previewPic = `url(https://webdev-api.loftschool.com/${
        existedWork.photo
      })`;
    },
    renederPicAndAddToData(e) {
      const file = e.target.files[0];
      const renderer = new FileReader();

      renderer.readAsDataURL(file);

      renderer.onloadend = () => {
        this.previewPic = `url(${renderer.result})`;
      };

      this.work.photo = file;
    }
  }
};
</script>


<style lang="scss" scoped>
.works__title {
  padding: 30px 0;
}

.preview {
  width: 200px;
  height: 200px;
  background: center center / contain no-repeat;
}

.works {
  display: flex;
}

.works__table {
  width: 100%;
}

.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  td {
    border: 1px solid black;
  }
}
</style>
