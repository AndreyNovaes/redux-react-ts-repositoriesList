import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        { params: { text: term } },
      );

      const names = data.objects.map((result: any) => {
        const { package: { name, description, version } } = result;
        return `${name}@${version} - ${description}`;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      const errorFunction = (err: any): string => err.message;
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: errorFunction(err),
      });
    }
  };
};
