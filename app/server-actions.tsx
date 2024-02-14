"use server";
export default async function getValidUser(username: string) {
  try {
    const response = await fetch(
      `https://api.mojang.com/users/profiles/minecraft/${username}`
    );
    
    if (response.ok) {
      console.log({ response });
      return true;
      //   setIsValid(true);
      //   setPlayerName(values.username);
    } else {
      //   setIsValid(false);
      return false;
    }
  } catch (error) {
    console.error("Error validating player:", error);
    // setIsValid(false);
  }
}
