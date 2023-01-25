export function getRecipe(alleRecipe, paramID) {
    const recipe = alleRecipe.filter((recipe) => recipe.sys.id === paramID);
    return recipe;
}
