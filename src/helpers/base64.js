export default class Base64 {
  static getExtension(base64) {
    const ext = base64.match(/[^:/]\w+(?=;|,)/)[0];

    return ext;
  }

  static getBody(base64) {
    const body = base64.replace(/^data:image\/\w+;base64,/, '');

    return body;
  }

  static encode(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  static getJWTPayload(base64) {
    return JSON.parse(atob(base64.split('.')[1]));
  }
}
