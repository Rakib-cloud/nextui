import { notFound } from "next/navigation";
import { baseUrl } from "./helper";




export function inputHandler(
  e: React.ChangeEvent<HTMLInputElement>,
  getter: any,
  setter: any
) {
  setter({
    ...getter,
    [e.target.name]: e.target.value,
  });
}
export async function dataGet(endpoint: string) {

  try {
    const res = await fetch(`${baseUrl.url}${endpoint}`, {
      method: "GET",
      headers: {
        "Context-type": "application/json",
      },
      next: {
        revalidate: 0,
      },
    });
    if (!res.ok) {
      notFound();
    }
    return res.json();
  } catch (error) {
    return error;
  }
}
export async function dataDetails(endpoint: string) {
  try {
    const res = await fetch(`${baseUrl.url}${endpoint}`, {
      method: "GET",
      headers: {
        "Context-type": "application/json",
      },
      next: {
        revalidate: 0,
      },
    });
    if (!res.ok) {
      notFound();
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function dataPost(endpoint: string, data: any) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    try {
      const res = await fetch(`${baseUrl.url}${endpoint}`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(data),
        next: {
          revalidate: 0,
        },
      });
      
      if (res.ok) {
        
        window.alert('booking successfully')
      }else{
        notFound();
      }
  
      return res.json();
    } catch (error) {
      return error;
    }
  }
  
 