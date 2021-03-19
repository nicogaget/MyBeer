import { Formik } from "formik";
import React, { Component } from "react";
import apiBeer, { apiBeerMap } from "../../../../conf/apiBeer";

export default class SearchBar extends Component {
  submit = (values, actions) => {
    const query =
      "?" +
      Object.keys(values)
        .map((k) => (values[k] ? `${k}=${values[k]}&` : ""))
        .join("");
    apiBeer
      .get("/beers" + query)
      .then((response) => response.data["hydra:member"])
      .then((beersApi) => {
        const beers = beersApi.map(apiBeerMap);
        this.props.updateBeers(beers);
        actions.setSubmitting(false);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <Formik
          onSubmit={this.submit}
          initialValues={{ name: "", country: "" }}
        >
          {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
            <form className="d-flex p-2 m-2 flex-row" onSubmit={handleSubmit}>
              <input
                name="name"
                className="flex-fill form-control "
                placeholder="recherce ..."
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <select
                name="country"
                onChange={handleChange}
                onBlur={handleBlur}
                className="mx-2"
              >
                <option selected disabled>
                  Pays
                </option>
                <option value="france">France</option>
                <option value="belgique">Belgique</option>
                <option value="allemagne">Allemagne</option>
                <option value="angleterre">Angleterre</option>
              </select>

              <button
                type="submit"
                className="btn btn-success "
                disabled={isSubmitting}
              >
                Recherche
              </button>
            </form>
          )}
        </Formik>
      </>
    );
  }
}
