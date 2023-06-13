import instance from ".";

const register = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const access in userInfo) formData.append(access, userInfo[access]);
    const { data } = await instance.post("/auth/register", formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const login = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const access in userInfo) formData.append(access, userInfo[access]);
    const { data } = await instance.post("/auth/login", formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { register, login };
