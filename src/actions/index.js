export const listAllDevelopers = () => {
  const developersList = [
    { name: 'Ahmed', age: '30', skill: 'ReactJS' },
    { name: 'Mustafa', age: '28', skill: 'VanillaJS' },
    { name: 'Ali', age: '26', skill: 'AngularJS' },
    { name: 'Omar', age: '32', skill: 'NodeJS' }
  ]
  return {
    type: "LIST_DEVELOPERS",
    payload: developersList
  }
}
export const selectDeveloper = (developerDetails) => {
  return {
    type: "DEVELOPER_SELECT",
    payload: developerDetails
  }
}