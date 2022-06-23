
const key = 'AAAAB3NzaC1yc2EAAAADAQABAAABgQDH+JI6oUoPD6FLZdzLrUWBhd';
const stringifiedData = JSON.stringify(data) + key;
const encrytedData = window.CryptoJS.SHA256(stringifiedData);
const encodedData = window.CryptoJS.enc.Base64.stringify(encrytedData);