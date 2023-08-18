<template>
    <div class="h-full flex justify-center items-center">
        <div class="bg-emerald-600 rounded-md p-6 w-full md:w-[500px]">
            <h1 class="text-center text-3xl font-bold  text-white">Login</h1>
            <div class="flex flex-col space-y-4 mt-4">
                <div>
                    <label for="" class="text-lg text-white">Email</label>
                    <input type="email" class="block w-full p-3 rounded text-xl focus:outline-none">
                </div>
                <div>
                    <label for="" class="text-lg text-white">Password</label>
                    <input type="password" class="block w-full p-3 rounded text-xl focus:outline-none">
                </div>
                <button type="submit" class="bg-emerald-400 rounded-md px-3 py-3 text-white hover:bg-emerald-500 ease-linear duration-100 font-semibold">Login</button>
            </div>
            <p class="text-md mt-3 text-gray-200">Forgot your password? <a href="#" class="text-gray-600 underline">click here</a></p>
        </div>
    </div>
</template>

<style scoped></style>
