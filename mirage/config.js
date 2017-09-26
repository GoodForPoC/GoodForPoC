export default function() {
  this.timing = 400;      // delay for each request, automatically set to 0 during testing
  this.post('/graphql', (schema, { requestBody }) => {
    const body = requestBody.replace(/\s+/g, ' ').trim();  // Remove excess whitespace

    if (/{ company {/.test(body)) {
      let user = schema.companies.find(1);
      return {
        "data": {
          "me": {
            "id": user.id,
            "email": user.email
          }
        }
      };
    }

    this.passthrough();
  });
}
