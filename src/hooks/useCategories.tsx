import { useEffect } from 'react';
import { useGetCategoriesQuery } from '../app/api/productsApi';
import { useAppDispatch, useAppSelector } from './reduxHooks';
import { setCategories } from '../app/reducers/ProductsSlice';

export const useCategories = () => {
  const dispatch = useAppDispatch();
  const {
    data: categoriesData,
    isLoading,
    isSuccess,
  } = useGetCategoriesQuery(undefined);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setCategories(categoriesData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoriesData]);

  const categories = useAppSelector(state => state.products.categories);

  return { categories, isLoading };
};