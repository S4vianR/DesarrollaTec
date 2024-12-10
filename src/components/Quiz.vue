<template>
    <div>
        <h2 class="text-3xl font-bold text-center mb-6">
            Quiz sobre la Biodiversidad en Chihuahua
        </h2>
        <article>
            <p class="text-lg text-center">
                Este quiz tiene como objetivo evaluar tus conocimientos sobre la biodiversidad en Chihuahua.
            </p>
            <p class="text-lg text-center">
                Contesta las siguientes preguntas y al final podrás ver tus resultados.
            </p>
        </article>
        <article class="flex flex-col justify-center items-start gap-6">

            <!-- Pregunta 1 -->
            <div class="mt-6 flex flex-col justify-center items-start gap-2">
                <p class="text-lg font-bold">
                    1. ¿Cuál es el objetivo principal del proyecto mencionado en el documento?
                </p>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta1Pregunta1" name="respuestaPregunta1" value="A">
                    <label class="cursor-pointer" for="respuesta1Pregunta1">A) Crear un parque nacional</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta2Pregunta1" name="respuestaPregunta1" value="B">
                    <label class="cursor-pointer" for="respuesta2Pregunta1">B) Desarrollar una página web sobre la flora
                        y fauna de
                        Chihuahua</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta3Pregunta1" name="respuestaPregunta1" value="C">
                    <label class="cursor-pointer" for="respuesta3Pregunta1">C) Realizar un estudio sobre el cambio
                        climático</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta4Pregunta1" name="respuestaPregunta1" value="D">
                    <label class="cursor-pointer" for="respuesta4Pregunta1">D) Promover la caza de especies en
                        peligro</label>
                </div>
                <div class="text-white bg-black mt-2 px-2 py-1" v-if="pregunta1Correcta">
                    Respuesta correcta B) Desarrollar una página web sobre la flora y fauna de Chihuahua
                </div>
            </div>

            <!-- Pregunta 2 -->
            <div class="flex flex-col justify-center items-start gap-2">
                <p class="text-lg font-bold">
                    2. ¿Qué especie de mamífero en Chihuahua está considerada en peligro de extinción?
                </p>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta1Pregunta2" name="respuestaPregunta2" value="A">
                    <label class="cursor-pointer" for="respuesta1Pregunta2">A) Venado cola blanca</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta2Pregunta2" name="respuestaPregunta2" value="B">
                    <label class="cursor-pointer" for="respuesta2Pregunta2">B) Lobo gris</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta3Pregunta2" name="respuestaPregunta2" value="C">
                    <label class="cursor-pointer" for="respuesta3Pregunta2">C) Coyote</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta4Pregunta2" name="respuestaPregunta2" value="D">
                    <label class="cursor-pointer" for="respuesta4Pregunta2">D) Oso negro</label>
                </div>
                <div class="text-white bg-black mt-2 px-2 py-1" v-if="pregunta2Correcta">
                    Respuesta correcta B) Lobo gris
                </div>
            </div>

            <!-- Pregunta 3 -->
            <div class="flex flex-col justify-center items-start gap-2">
                <p class="text-lg font-bold">
                    3. ¿Cuál de las siguientes plantas es típica del desierto de Chihuahua?
                </p>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta1Pregunta3" name="respuestaPregunta3" value="A">
                    <label class="cursor-pointer" for="respuesta1Pregunta3">A) Pino</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta2Pregunta3" name="respuestaPregunta3" value="B">
                    <label class="cursor-pointer" for="respuesta2Pregunta3">B) Sotol</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta3Pregunta3" name="respuestaPregunta3" value="C">
                    <label class="cursor-pointer" for="respuesta3Pregunta3">C) Encino</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta4Pregunta3" name="respuestaPregunta3" value="D">
                    <label class="cursor-pointer" for="respuesta4Pregunta3">D) Madoroño</label>
                </div>
                <div class="text-white bg-black mt-2 px-2 py-1" v-if="pregunta3Correcta">
                    Respuesta correcta B) Sotol
                </div>
            </div>

            <!-- Pregunta 4 -->
            <div class="flex flex-col justify-center items-start gap-2">
                <p class="text-lg font-bold">
                    4. ¿Qué área natural fue decretada como Reserva de la Biosfera en 1979?
                </p>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta1Pregunta4" name="respuestaPregunta4" value="A">
                    <label class="cursor-pointer" for="respuesta1Pregunta4">A) Parque Nacional Cumbres de
                        Majalca</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta2Pregunta4" name="respuestaPregunta4" value="B">
                    <label class="cursor-pointer" for="respuesta2Pregunta4">B) Reserva de la Biosfera Mapimí</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta3Pregunta4" name="respuestaPregunta4" value="C">
                    <label class="cursor-pointer" for="respuesta3Pregunta4">C) Área de Protección de Flora y Fauna Cañón
                        de Santa Elena</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta4Pregunta4" name="respuestaPregunta4" value="D">
                    <label class="cursor-pointer" for="respuesta4Pregunta4">D) Parque Nacional Cascada de
                        Basaseachi</label>
                </div>
                <div class="text-white bg-black mt-2 px-2 py-1" v-if="pregunta4Correcta">
                    Respuesta correcta B) Reserva de la Biosfera Mapimí
                </div>
            </div>

            <!-- Pregunta 5 -->
            <div class="flex flex-col justify-center items-start gap-2">
                <p class="text-lg font-bold">
                    5. ¿Cuál es una de las principales causas del deterioro de la biodiversidad en Chihuahua?
                </p>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta1Pregunta5" name="respuestaPregunta5" value="A">
                    <label class="cursor-pointer" for="respuesta1Pregunta5">A) Aumento de la población</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta2Pregunta5" name="respuestaPregunta5" value="B">
                    <label class="cursor-pointer" for="respuesta2Pregunta5">B) Turismo</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta3Pregunta5" name="respuestaPregunta5" value="C">
                    <label class="cursor-pointer" for="respuesta3Pregunta5">C) Contaminación</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta4Pregunta5" name="respuestaPregunta5" value="D">
                    <label class="cursor-pointer" for="respuesta4Pregunta5">D) Agricultura sostenible</label>
                </div>
                <div class="text-white
                    bg-black mt-2 px-2 py-1" v-if="pregunta5Correcta">
                    Respuesta correcta C) Contaminación
                </div>
            </div>

            <!-- Pregunta 6 -->
            <div class="flex flex-col justify-center items-start gap-2">
                <p class="text-lg font-bold">
                    6. ¿Qué tipo de ecosistema se caracteriza por la presencia de plantas herbáceas de tipo
                    graminiforme?
                </p>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta1Pregunta6" name="respuestaPregunta6" value="A">
                    <label class="cursor-pointer" for="respuesta1Pregunta6">A) Pastizal natural</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta2Pregunta6" name="respuestaPregunta6" value="B">
                    <label class="cursor-pointer" for="respuesta2Pregunta6">B) Desierto</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta3Pregunta6" name="respuestaPregunta6" value="C">
                    <label class="cursor-pointer" for="respuesta3Pregunta6">C) Bosque templado</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta4Pregunta6" name="respuestaPregunta6" value="D">
                    <label class="cursor-pointer" for="respuesta4Pregunta6">D) Selva alta</label>
                </div>
                <div class="text-white
                    bg-black mt-2 px-2 py-1" v-if="pregunta6Correcta">
                    Respuesta correcta A) Pastizal natural
                </div>
            </div>

            <!-- Pregunta 7 -->
            <div class="flex flex-col justify-center items-start gap-2">
                <p class="text-lg font-bold">
                    7. ¿Qué ave endémica se menciona en el documento que habita en los bosques de encinos de
                    Chihuahua?
                </p>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta1Pregunta7" name="respuestaPregunta7" value="A">
                    <label class="cursor-pointer" for="respuesta1Pregunta7">A) Halcón peregrino</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta2Pregunta7" name="respuestaPregunta7" value="B">
                    <label class="cursor-pointer" for="respuesta2Pregunta7">B) Águila real</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta3Pregunta7" name="respuestaPregunta7" value="C">
                    <label class="cursor-pointer" for="respuesta3Pregunta7">C) Colibrí garganta azul</label>
                </div>
                <div class="flex justify-start items-center gap-1">
                    <input type="radio" id="respuesta4Pregunta7" name="respuestaPregunta7" value="D">
                    <label class="cursor-pointer" for="respuesta4Pregunta7">D) Chara pecho gris</label>
                </div>
                <div class="text-white
                    bg-black mt-2 px-2 py-1" v-if="pregunta7Correcta">
                    Respuesta correcta D) Chara pecho gris
                </div>
            </div>

            <div>
                <p><span class="font-bold">Respuestas correctas</span>: {{ numeroCorrectas }}</p>
            </div>
            <div class="flex justify-center items-center gap-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    @click="revisarRespuestas">
                    Enviar respuestas
                </button>
                <!-- Boton para reiniciar el examen -->
                <button class="bg-red-500
                    hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="reiniciarExamen">
                    Reiniciar examen
                </button>
            </div>
        </article>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';

export default {
    setup() {
        // Valores reactivos
        const pregunta1Correcta = ref(false);
        const pregunta2Correcta = ref(false);
        const pregunta3Correcta = ref(false);
        const pregunta4Correcta = ref(false);
        const pregunta5Correcta = ref(false);
        const pregunta6Correcta = ref(false);
        const pregunta7Correcta = ref(false);
        const numeroCorrectas = ref(0);

        const revisarRespuestas = () => {
            numeroCorrectas.value = 0;
            // Lógica para revisar las respuestas
            if (document.getElementById('respuesta2Pregunta1').checked) {
                pregunta1Correcta.value = true;
                numeroCorrectas.value++;
            }

            if (document.getElementById('respuesta2Pregunta2').checked) {
                pregunta2Correcta.value = true;
                numeroCorrectas.value++;
            }

            if (document.getElementById('respuesta2Pregunta3').checked) {
                pregunta3Correcta.value = true;
                numeroCorrectas.value++;
            }

            if (document.getElementById('respuesta2Pregunta4').checked) {
                pregunta4Correcta.value = true;
                numeroCorrectas.value++;
            }

            if (document.getElementById('respuesta3Pregunta5').checked) {
                pregunta5Correcta.value = true;
                numeroCorrectas.value++;
            }

            if (document.getElementById('respuesta1Pregunta6').checked) {
                pregunta6Correcta.value = true;
                numeroCorrectas.value++;
            }

            if (document.getElementById('respuesta4Pregunta7').checked) {
                pregunta7Correcta.value = true;
                numeroCorrectas.value++;
            }
        };

        const reiniciarExamen = () => {
            // Lógica para reiniciar el examen
            pregunta1Correcta.value = false;
            pregunta2Correcta.value = false;
            pregunta3Correcta.value = false;
            pregunta4Correcta.value = false;
            pregunta5Correcta.value = false;
            pregunta6Correcta.value = false;
            pregunta7Correcta.value = false;
            numeroCorrectas.value = 0;

            // Ciclo para quitarles el check a todos los radios
            const radios = document.querySelectorAll('input[type="radio"]');

            radios.forEach(radio => {
                radio.checked = false;
            });
        };

        return {
            pregunta1Correcta,
            pregunta2Correcta,
            pregunta3Correcta,
            pregunta4Correcta,
            pregunta5Correcta,
            pregunta5Correcta,
            pregunta6Correcta,
            pregunta7Correcta,
            revisarRespuestas,
            reiniciarExamen,
            numeroCorrectas
        };
    }
};
</script>