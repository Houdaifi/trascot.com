<template>
  <div class="bg-gray-800 flex flex-col-reverse xl:flex-row justify-center px-8 py-16 text-gray-200 xl:space-y-0 xl:space-x-24">
      
      <form action="" class="p-8 shadow-2xl border rounded space-y-6 max-w-xl">
        <h1 class="text-center text-4xl uppercase font-semibold mb-4 text-white">Contact Us</h1>
        <div class="inline-flex space-x-5">
            <div class="">
                <label class="block uppercase tracking-wide text-xs mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input required class="appearance-none text-gray-800 block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="">
            </div>
            <div class="">
                <label class="block uppercase tracking-wide text-xs mb-2" for="grid-first-name">
                  First Name
                </label>
                <input required class="appearance-none text-gray-800 block w-full border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="">
            </div>
        </div>
        <div class="">
            <label class="block uppercase tracking-wide text-xs mb-2" for="grid-email">
              E-mail
            </label>
            <input required class="appearance-none text-gray-800 block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email">
        </div>
        <div class="">
            <label class="block uppercase tracking-wide text-xs mb-2" for="grid-message">
              Message
            </label>
            <textarea class=" no-resize appearance-none text-gray-800 block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
        </div>
        <div class="flex justify-end">
            <button class="bg-blue-500 text-white rounded px-4 py-2 text-sm font-semibold hover:bg-yellow-500 border">Envoyer</button>
        </div>
      </form>

      <div class="xl:pt-24 rounded block xl:hidden mb-8">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4854.023859889115!2d-5.774917603093153!3d35.74171373382515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b80f8fe0e66ab%3A0x90f7f3f25143077c!2sRte%20de%20Tetouan%2C%20Tanger!5e0!3m2!1sen!2sma!4v1642962798665!5m2!1sen!2sma" width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>

      <div class="flex flex-col space-y-4 xl:mt-10 mb-10 xl:pt-24">
        <h1 class="text-3xl font-bold text-yellow-500">Tragefer</h1>
        <p class="max-w-xl">Tragefer Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make.</p>
        <h2 class="text-white text-lg">Connectez-vous avec nous:</h2>
        <div class="">
            <div class="inline-flex items-center uppercase mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd" />
                </svg>
                Email
            </div>
            <address class="text-gray-400">info@tragefer-org.com </address>
        </div>
        <div>
            <div class="inline-flex items-center uppercase mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Phone
            </div>
            <address class="text-gray-400">+212 666666666 </address>
        </div>
        <div>
            <h4 class="inline-flex items-center uppercase mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
                </svg>
                Adresse
            </h4>
            <address class="text-gray-400">48 Vitosha Blvd,
                ground floor, 1000
                Sofia Center, Sofia,
                Bulgaria
            </address>
        </div>

      </div>

      <div  style="margin-left:200px !important;" class="xl:pt-24 rounded hidden xl:block">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4854.023859889115!2d-5.774917603093153!3d35.74171373382515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b80f8fe0e66ab%3A0x90f7f3f25143077c!2sRte%20de%20Tetouan%2C%20Tanger!5e0!3m2!1sen!2sma!4v1642962798665!5m2!1sen!2sma" width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>

  </div>
</template>

<script>
export default {
    name: 'Footeer'
}
</script>

<style>

</style>