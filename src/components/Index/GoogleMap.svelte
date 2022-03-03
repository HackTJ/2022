<script>
  import { onMount } from 'svelte'

  let container;
  let map;
  export let zoom = 18;
  export let latlng = {lat: 38.895271, lng: -77.069702}; // YEXT HQ Location
  

  onMount(async () => {
    let google = window.google
    let mapCanvas = document.getElementById("map-canvas");

    mapCanvas = new google.maps.Map(mapCanvas, {zoom, center: latlng})

    new google.maps.Marker({
      map: mapCanvas,
      position: latlng,
      animation: google.maps.Animation.DROP,
    });
  })
</script>

<div class="w-full h-[400px] rounded-2xl" id="map-canvas"></div>
