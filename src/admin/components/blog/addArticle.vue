<template lang="pug">
  .article
    h3.subtitle.subtitle_article Добавить запись
    form.article-form
      label.article-form__label
        input(placeholder="Название" type="text" v-model="article.title")
      label.article-form__label
        input(placeholder="Дата" type="text" v-model="article.date").
      label.article-form__label
        textarea(rows="6" v-model="article.content")
      button(type="button" @click="editMode ? editCurrentArticle(article) : addNewArticle(article)").button {{editMode ? "Сохранить изменения" : "Добавить"}} 
</template>


<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      editedArticle: state => state.articles.editedArticle,
      editMode: state => state.articles.editMode,
      article: state =>
        state.articles.editMode
          ? state.articles.editedArticle
          : { id: 0, title: "", date: "", content: "" }
    })
  },
  methods: {
    ...mapActions({
      addArticle: "articles/addArticle",
      changeArticle: "articles/changeArticle"
    }),
    addNewArticle(article) {
      this.addArticle(article);
    },
    editCurrentArticle(article) {
      this.changeArticle(article);
    }
  }
};
</script>
<style lang="scss" scoped>
.article {
  width: 50%;
}
.subtitle_article {
  margin-bottom: 15px;
}
.article-form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.article-form__input {
  width: 300px;
  padding: 14px 20px;
  border-radius: 5px;
}
.article-form__label {
  margin-bottom: 30px;
  &:first-child {
    margin-bottom: 20px;
  }
}
.article-form__textarea {
  width: 500px;
  resize: none;
  border: none;
  padding: 14px 20px;
  border-radius: 5px;
}
</style>