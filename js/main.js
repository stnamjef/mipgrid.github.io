base_url = "https://huggingface.co/stnamjef/MipGrid/resolve/main/images/"

function select_model(target, dir, scene) { 
    if (dir == "left"){
        var img = document.getElementById("left_img" + "_" + scene);
        var caption = document.getElementById("left_caption" + "_" + scene);
    }
    else if (dir == "right"){
        var img = document.getElementById("right_img" + "_" + scene);
        var caption = document.getElementById("right_caption" + "_" + scene);
    }
    var model = target.value;   
	var frame = document.getElementById("input" + "_" + scene).value.toString().padStart(3, '0');
	
    if (model == "original_d0")
        img.src = base_url + scene + "/" + "original_d0" + "/" + frame + ".png"
    else if (model == "original_d1")
        img.src = base_url + scene + "/" + "original_d1" + "/" + frame + ".png"
    else if (model == "original_d2")
        img.src = base_url + scene + "/" + "original_d2" + "/" + frame + ".png"
    else if (model == "original_d3")
        img.src = base_url + scene + "/" + "original_d3" + "/" + frame + ".png"
    else if (model == "mipgrid_d0")
        img.src = base_url + scene + "/" + "mipgrid_d0" + "/" + frame + ".png"
    else if (model == "mipgrid_d1")
        img.src = base_url + scene + "/" + "mipgrid_d1" + "/" + frame + ".png"
    else if (model == "mipgrid_d2")
        img.src = base_url + scene + "/" + "mipgrid_d2" + "/" + frame + ".png"
    else
        img.src = base_url + scene + "/" + "mipgrid_d3" + "/" + frame + ".png"
    
    // caption.innerHTML = get_psnr(model, dataset, scene)
}


function select_frame(target, scene) {
	var left_model = document.getElementById("left_select" + "_" + scene).value;
	var right_model = document.getElementById("right_select" + "_" + scene).value;

	var left_img = document.getElementById("left_img" + "_" + scene);
	var right_img = document.getElementById("right_img" + "_" + scene);

	var frame = target.value.toString().padStart(3, '0');

    if (left_model == "original_d0")
        left_img.src = base_url + scene + "/" + "original_d0" + "/" + frame + ".png"
    else if (left_model == "original_d1")
        left_img.src = base_url + scene + "/" + "original_d1" + "/" + frame + ".png"
    else if (left_model == "original_d2")
        left_img.src = base_url + scene + "/" + "original_d2" + "/" + frame + ".png"
    else if (left_model == "original_d3")
        left_img.src = base_url + scene + "/" + "original_d3" + "/" + frame + ".png"
    else if (left_model == "mipgrid_d0")
        left_img.src = base_url + scene + "/" + "mipgrid_d0" + "/" + frame + ".png"
    else if (left_model == "mipgrid_d1")
        left_img.src = base_url + scene + "/" + "mipgrid_d1" + "/" + frame + ".png"
    else if (left_model == "mipgrid_d2")
        left_img.src = base_url + scene + "/" + "mipgrid_d2" + "/" + frame + ".png"
    else
        left_img.src = base_url + scene + "/" + "mipgrid_d3" + "/" + frame + ".png"

    if (right_model == "original_d0")
        right_img.src = base_url + scene + "/" + "original_d0" + "/" + frame + ".png"
    else if (right_model == "original_d1")
        right_img.src = base_url + scene + "/" + "original_d1" + "/" + frame + ".png"
    else if (right_model == "original_d2")
        right_img.src = base_url + scene + "/" + "original_d2" + "/" + frame + ".png"
    else if (right_model == "original_d3")
        right_img.src = base_url + scene + "/" + "original_d3" + "/" + frame + ".png"
    else if (right_model == "mipgrid_d0")
        right_img.src = base_url + scene + "/" + "mipgrid_d0" + "/" + frame + ".png"
    else if (right_model == "mipgrid_d1")
        right_img.src = base_url + scene + "/" + "mipgrid_d1" + "/" + frame + ".png"
    else if (right_model == "mipgrid_d2")
        right_img.src = base_url + scene + "/" + "mipgrid_d2" + "/" + frame + ".png"
    else
        right_img.src = base_url + scene + "/" + "mipgrid_d3" + "/" + frame + ".png"
}

function get_psnr(model, dataset, scene) {
	if (model == "TensoRF") {
		if (dataset == "NSVF") {
			if (scene == "Spaceship")
			return "<b>TensoRF-VM192</b><br>PSNR: 37.66"
		}
		else if (dataset == "NeRF") {
			if (scene == "Lego") {
				return "<b>TensoRF-VM192</b><br>PSNR: 36.04<br>Size: 17.03MB"
			}
		}
	}
	else if (model == "GT") {
		if (dataset == "NSVF") {
			if (scene == "Spaceship")
			return "<b>TensoRF-VM192</b><br>PSNR: 37.66"
		}
		else if (dataset == "NeRF") {
			if (scene == "Lego") {
				return "<b>Ground Truth</b>"
			}
		}
	}
	else if(model == "1.6e-09") {
		if(dataset == "NSVF") {
			if(scene == "Spaceship")
				return "<b>Ours-Sparsity 0.9967</b><br>PSNR: 34.50"
		}
		else if (dataset == "NeRF") {
			if (scene == "Lego") {
				return "<b>Ours-Sparsity 0.9959</b><br>PSNR: 31.51<br>Size: 0.33MB"
			}
		}
	}
	else if(model == "8e-10") {
		if(dataset == "NSVF") {
			if(scene == "Spaceship")
				return "<b>Ours-Sparsity 0.9948</b><br>PSNR: 35.60"
        }
		else if (dataset == "NeRF") {
			if (scene == "Lego") {
				return "<b>Ours-Sparsity 0.9940</b><br>PSNR: 32.71<br>Size: 0.38MB"
			}
		}
	}
	else if(model == "4e-10") {
		if(dataset == "NSVF") {
			if(scene == "Spaceship")
				return "<b>Ours-Sparsity 0.9925</b><br>PSNR: 36.26"
        }
		else if (dataset == "NeRF") {
			if (scene == "Lego") {
				return "<b>Ours-Sparsity 0.9907</b><br>PSNR: 33.64<br>Size: 0.47MB"
			}
		}
	}
	else if(model == "2e-10") {
		if(dataset == "NSVF") {
			if(scene == "Spaceship")
				return "<b>Ours-Sparsity 0.9886</b><br>PSNR: 36.76"
        }
		else if (dataset == "NeRF") {
			if (scene == "Lego") {
				return "<b>Ours-Sparsity 0.9864</b><br>PSNR: 34.30<br>Size: 0.59MB"
			}
		}
	}
	else if(model == "1e-10"){
		if(dataset == "NSVF"){
			if(scene == "Spaceship")
				return "<b>Ours-Sparsity 0.9823</b><br>PSNR: 37.01"
        }
		else if (dataset == "NeRF") {
			if (scene == "Lego") {
				return "<b>Ours-Sparsity 0.9794</b><br>PSNR: 34.88<br>Size: 0.79MB"
			}
		}
	}
	else if(model == "5e-11"){
		if(dataset == "NSVF"){
			if(scene == "Spaceship")
				return "<b>Ours-Sparsity 0.9697</b><br>PSNR: 37.35"
        }
		else if (dataset == "NeRF") {
			if (scene == "Lego") {
				return "<b>Ours-Sparsity 0.9652</b><br>PSNR: 35.10<br>Size: 1.12MB"
			}
		}
	}
	else if(model == "2.5e-11"){
		if(dataset == "NSVF"){
			if(scene == "Spaceship")
				return "<b>Ours-Sparsity 0.9460</b><br>PSNR: 37.34"
        }
		else if (dataset == "NeRF") {
			if (scene == "Lego") {
				return "<b>Ours-Sparsity 0.9441</b><br>PSNR: 35.33<br>Size: 1.67MB"
			}
		}
	}
	else if(model == "1.25e-11"){
		if(dataset == "NSVF"){
			if(scene == "Spaceship")
				return "<b>Ours-Sparsity 0.9165</b><br>PSNR: 37.51"
        }
		else if (dataset == "NeRF") {
			if (scene == "Lego") {
				return "<b>Ours-Sparsity 0.9165</b><br>PSNR: 35.44<br>Size: 2.33MB"
			}
		}
	}
	else if(model == "6.25e-12"){
		if(dataset == "NSVF"){
			if(scene == "Spaceship")
				return "<b>Ours-Sparsity 0.8876</b><br>PSNR: 37.61"
        }
		else if (dataset == "NeRF") {
			if (scene == "Lego") {
				return "<b>Ours-Sparsity 0.8758</b><br>PSNR: 35.52<br>Size: 3.15MB"
			}
		}
	}
}