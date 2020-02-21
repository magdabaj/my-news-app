/**
 *
 * LinkForm
 *
 */

import React, {useState} from "react";
import PropTypes from 'prop-types';
import Heading from "../Login/Heading";
import TextInput from "../TextInput";
import ButtonsContainer from "../Login/ButtonsContainer";
import Button from "../Login/Button";
import Form from "../Login/Form";
// import styled from 'styled-components';

const LinkForm = ({loggedUser, addArticle, addArticleCanceled, selectedTag}) => {

  const [article, setArticle] = useState({
    "title": "",
    "url": "",
  });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  function handleChange(event) {
    const {name, value} = event.target;

    setArticle(prevArticle => ({
      ...prevArticle,
      [name]: value
    }))
  };
  console.log("article", article);
  console.log("user", loggedUser);
  console.log("tag", selectedTag);

  function formIsValid() {
    const {title, url} = article;
    const errors = {};

    if(!title) errors.title = "Title is required";
    if(!url) errors.url = "Url is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  }


  function handleSave(event) {
    event.preventDefault();
    if(!formIsValid()) return;
    setSaving(true);
    try{
      addArticle(article, loggedUser.id, selectedTag.id);
    } catch (e) {
      setSaving(false);
      setErrors({handleSave: e.message})
    }
  }
  return (
      loggedUser.token === null || loggedUser.token === undefined ? (
          <Heading>You must login in order to add article</Heading>
      ) : (
          <Form onSubmit={handleSave}>
            <Heading>
              ADD ARTICLE
            </Heading>
            {errors.handleSave && (
                <div className={"alert-danger"} role={"alert"}>
                  {errors.handleSave}
                </div>
            )}
            <TextInput
                name={"title"}
                label={"Title"}
                value={article.title}
                onChange={handleChange}
                error={errors.title}
            />
            <TextInput
                name={"url"}
                label={"URL"}
                value={article.url}
                onChange={handleChange}
                error={errors.url}
            />
            <ButtonsContainer>
              <Button onClick={addArticleCanceled}>cancel</Button>
              <Button type="submit" disabled={saving} onSubmit={handleSave}>
                {saving ? "logging..." : "login"}
              </Button>
            </ButtonsContainer>
          </Form>
      )

  );
};

LinkForm.propTypes = {
  addArticle: PropTypes.func.isRequired,
  addArticleCanceled: PropTypes.func.isRequired,
  selectedTag: PropTypes.object.isRequired
};

export default LinkForm;
