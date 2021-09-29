import objectDb from "."

function useUpdateObjectDb(object) {
  return object => objectDb.update(object)
}

export default useUpdateObjectDb