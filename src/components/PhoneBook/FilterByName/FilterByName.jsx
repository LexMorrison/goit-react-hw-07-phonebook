import { NamesFilterLabel, NamesFilterInput } from './FilterByName.styled';
import { setFilter } from 'redux/FilterSlice';
import { selectFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const changeFilter = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };
  return (
    <div>
      <NamesFilterLabel>
        Find contacts by name
        <NamesFilterInput type="text" value={value} onChange={changeFilter} />
      </NamesFilterLabel>
    </div>
  );
};
