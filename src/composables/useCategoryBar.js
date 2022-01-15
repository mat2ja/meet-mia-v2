const categoryBarOpen = ref(false);

export default () => {
  const toggleCategoryBar = () => {
    categoryBarOpen.value = !categoryBarOpen.value;
  };

  const openCategoryBar = () => {
    categoryBarOpen.value = true;
  };

  const closeCategoryBar = () => {
    categoryBarOpen.value = false;
  };
  return {
    categoryBarOpen,
    toggleCategoryBar,
    closeCategoryBar,
    openCategoryBar,
  };
};
