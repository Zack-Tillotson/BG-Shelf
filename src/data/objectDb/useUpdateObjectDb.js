import objectDb from "."

function useUpdateObjectDb() {
  return object => objectDb.update(object)
}

export default useUpdateObjectDb