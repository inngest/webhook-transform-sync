// Clerk webhook
function transform(evt, headers = {}, queryParams = {}) {
  return {
    name: `clerk/${evt.type}`,
    data: evt.data,
  };
}

exports.transform = transform;
