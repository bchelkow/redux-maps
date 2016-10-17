export const CREATE_MARKER = 'CREATE_MARKER';
export const UPDATE_MARKER = 'UPDATE_MARKER';
export const DELETE_MARKER = 'DELETE_MARKER';

let nextId = 0;

export const createMarker = (latLng) => ({
  type: CREATE_MARKER,
  id: `new_${nextId++}`,
  latLng
});

export const updateMarker = (id, text) => ({
  type: UPDATE_MARKER,
  id,
  text
});

export const deleteMarker = (id) => ({
  type: DELETE_MARKER,
  id
});
