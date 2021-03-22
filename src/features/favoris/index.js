import { connect } from "react-redux";
import React from "react";
import { Loading } from "../../components";
import { FavorisList } from "./components";
import { tryRemoveFavori } from "../../store/actions";
import { favorisListSelector,favorisIsLoadingSelector} from '../../store/selectors'


// eslint-disable-next-line
const favoris = (props) => {
  return (
    
    <div className=" d-flex flex-row flex-fill pt-4 p-2">
      {console.log(props)}
      {props.isLoading ? (
        <Loading />
      ) : (
        <div className=" d-flex flex-row flex-fill pt-4 p-2">
          <FavorisList
            favoris={props.favoris}
            removeFavori={props.tryRemoveFavori}
          />
        </div>
      )}
    </div>
  );
};

export default connect(
  (state) => ({
    favoris: favorisListSelector(state),
    isLoading: favorisIsLoadingSelector(state),
  }),
  {
    tryRemoveFavori,
  }
)(favoris);
